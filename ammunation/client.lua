price = nil
weapon = nil
person = false

ESX = exports["es_extended"]:getSharedObject()

ESX.PlayerData = ESX.GetPlayerData()

Citizen.CreateThread(function()
    local modelHash = GetHashKey("ig_chef")
    local spawnLocations = {
        {x = 253.4933, y = -51.5588, z = 69.9411 - 1, heading = 68.0712},
        {x = 23.4699, y = -1105.8652, z = 29.7970 - 1, heading = 165.7456},
        {x = -661.2886, y = -933.5560, z = 21.8292 - 1, heading = 179.8051},
        {x = 259.4933, y = -2159.0698, z = 29.6190 - 1, heading = 358.1033},
        {x = -330.9100, y = 6085.7603, z = 31.4548 - 1, heading = 215.8080},
        {x = 1692.9835, y = 3761.7571, z = 34.7053 - 1, heading = 221.8982},
        {x = -1118.2626, y = 2700.4351, z = 18.5541 - 1, heading = 208.8526},
        {x = 841.2626, y = -1035.3507, z = 28.1948 - 1, heading = 359.4447},
        {x = 2566.9392, y = 292.5265, z = 108.7348 - 1, heading = 356.1502}
    }

    RequestModel(modelHash)
    while not HasModelLoaded(modelHash) do
        Citizen.Wait(100)
    end

    for _, location in ipairs(spawnLocations) do
        Citizen.CreateThread(function()
            while true do
                Citizen.Wait(1000)

                if not DoesEntityExist(location.person) then
                    location.person = CreatePed(1, modelHash, location.x, location.y, location.z, location.heading, true, true)
                    FreezeEntityPosition(location.person, true)
                    SetEntityInvincible(location.person, true)
                    SetBlockingOfNonTemporaryEvents(location.person, true)
                    TaskStandStill(location.person, 1e15)  -- Using a large number for standstill time

                    local pedNetId = NetworkGetNetworkIdFromEntity(location.person)
                    exports.ox_target:addEntity(pedNetId, {
                        event = 'openweaponstore',
                        icon = 'fas fa-gun',
                        label = 'Åben våbenbutikken'
                    })
                end
            end
        end)
    end
end)




RegisterNetEvent("openweaponstore")
AddEventHandler("openweaponstore", function()
    TriggerScreenblurFadeIn(2000)
    SetNuiFocus(true, true)
    SendNUIMessage({
        type = 'open',
    })
end)

RegisterNUICallback('closeweaponstore', function(data)
    TriggerScreenblurFadeOut(2000)
    SetNuiFocus(false, false)
end)

RegisterNUICallback('buyweapon', function(data)


    price2 = data.price

    if data.weaponname == 'Svensknøgle' then
        weapon = 'weapon_wrench'
    elseif data.weaponname == 'Kampøkse' then
        weapon = 'weapon_battleaxe'
    elseif data.weaponname == 'Knojern' then
        weapon = 'weapon_knuckle'
    elseif data.weaponname == 'Zombie-Kniv' then
        weapon = 'weapon_knife'
    elseif data.weaponname == 'Machete' then
        weapon = 'weapon_machete'
    elseif data.weaponname == 'foldekniv' then
        weapon = 'weapon_switchblade'
    elseif data.weaponname == 'Baseball-Bat' then
        weapon = 'weapon_bat'
    elseif data.weaponname == 'Koben' then
        weapon = 'weapon_crowbar'
    elseif data.weaponname == 'Lommelygte' then
        weapon = 'weapon_flashlight'
    elseif data.weaponname == 'Golfkølle' then
        weapon = 'weapon_golfclub'
    elseif data.weaponname == 'Hammer' then
        weapon = 'weapon_hammer'
    else
        print(data.weaponname)
    end

    weaponcode = weapon

    price = tonumber(price2)

    TriggerEvent("servertrigger")

end)

RegisterNetEvent("servertrigger")
AddEventHandler("servertrigger", function(playersaldo)
    TriggerServerEvent("weaponcheck", source)
end)

RegisterNetEvent("weaponcheckdone")
AddEventHandler("weaponcheckdone", function(playersaldo)

    if price <= playersaldo then
        lib.notify({
            title = 'Godkendt',
            description = 'Du købte våbnet',
            type = 'success'
        })
        TriggerServerEvent("weaponpay", price, weaponcode)
    else
        lib.notify({
            title = 'Fejl',
            description = 'Du har ikke nok penge i banken',
            type = 'error'
        })
    end

end)


RegisterNUICallback('setgps', function(data)
    
    local gps = nil

    if data.job == 'Postmand' then
        gps = vector3(67.8762, 125.1731, 79.1779)
    elseif data.job == 'Skraldemand' then
        gps = vector3(-315.0836, -1534.6810, 27.6474)
    elseif data.job == 'Farmer' then
        gps = vector3(2559.9612, 4688.3721, 34.0597)
    elseif data.job == 'Træhugger' then
        gps = vector3(-588.3614, 5305.7471, 70.2146)
    elseif data.job == 'Pizzabud' then
        gps = vector3(443.5000, 134.7627, 100.0219)
    end

    SetNewWaypoint(gps)

end)