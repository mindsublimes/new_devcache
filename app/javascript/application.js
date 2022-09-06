// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails

import "jquery"
import "jquery_ujs"
import "popper"
import "bootstrap"


import { Turbo } from "@hotwired/turbo-rails"
Turbo.session.drive = false
import "controllers"
import * as bootstrap from "bootstrap"

import "custom/main"
import "custom/custom_nav"
import "custom/slick"
import "custom/slick.min"
import "custom/loader"


