require 'rails_helper'

describe SessionsController do
  let(:user) { double(id: 1, password: 'pass', email: 'test@example.com') }
  let(:params) { {email: 'test@example.com', password: 'pass'} }

  describe "GET create" do
    context "valid credentials" do
      before do
        expect(User).to receive(:find_by).and_return(user)
        expect(user).to receive(:authenticate).with(user.password).and_return(true)
      end    
    
      it 'loggs user in' do
        post :create, params
        expect(session[:user_id]).to eq(user.id)
        expect(response).to be_success
      end
    end

    context "user not found" do
      before do
        expect(User).to receive(:find_by).and_return(nil)
      end    

      it 'returns 422 for missing user' do
        post :create, params
        expect(session[:user_id]).to eq(nil)
        expect(response.status).to eq(422)
      end

    end

    context "invalid credentials" do
      before do
        expect(User).to receive(:find_by).and_return(user)
        expect(user).to receive(:authenticate).with(user.password).and_return(false)
      end    

      it 'returns 422 for wrong password' do
        post :create, params
        expect(session[:user_id]).to eq(nil)
        expect(response.status).to eq(422)
      end
    end
  end

end
