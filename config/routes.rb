Rails.application.routes.draw do
  # get 'contacts/index'
  # get 'abouts/index'
  # get 'testimonials/index'
  # get 'careers/index'
  # get 'technologies/index'
  # get 'portfolios/index'
  # get 'products/index'
  # get 'home/index'
  root 'home#index'

  resources :products, :portfolios, :technologies, :careers, :testimonials, :abouts, :contacts
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
