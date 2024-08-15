fx_version 'adamant'
game 'gta5'
lua54 'yes'

version '1.2.0'

server_scripts {
  "server.lua",
}

client_scripts {
  "client.lua",
  "Config.lua",
}

shared_scripts {
    '@ox_lib/init.lua',
}

ui_page 'html/ui.html'

files {
	'html/*'
}