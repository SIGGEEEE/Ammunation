ESX = exports["es_extended"]:getSharedObject()

RegisterNetEvent("weaponcheck")
AddEventHandler("weaponcheck", function()
    source = source
    local xPlayer = ESX.GetPlayerFromId(source)
    
    if xPlayer then
        local account = xPlayer.getAccount('bank')
        local playersaldo = account.money
        TriggerClientEvent("weaponcheckdone", source, playersaldo)
    else
        print("fejl")
    end
end)

RegisterNetEvent("weaponpay")
AddEventHandler("weaponpay", function(price, weaponcode)
    source = source
    local xPlayer = ESX.GetPlayerFromId(source)
    xPlayer.removeAccountMoney('bank', price)
    xPlayer.addInventoryItem(weaponcode, 1)
    print(weaponcode)
end)