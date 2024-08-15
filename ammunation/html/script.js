document.addEventListener('DOMContentLoaded', function() {

    const weapon = document.getElementById('weapon');
    const bbutton = document.getElementById('backwards');
    const fbutton = document.getElementById('forwards');
    const pricetext = document.getElementById('price');
    const nametext = document.getElementById('name');
    const dmg = document.getElementById('dmg');
    const closebutton = document.getElementById('closebutton');
    const mainbox = document.getElementById('mainbox');
    const buybutton = document.getElementById('buybutton');

    
    window.addEventListener('message', function(event) {
        if (event.data.type === 'open') {
            mainbox.classList.add('show');
        }
    });

    const imageSources = [
        'https://cdn.discordapp.com/attachments/1151610324177399959/1263265560058269757/bat-removebg-preview.png?ex=66999b3b&is=669849bb&hm=15a852e8577b6cb108ed3bd5f31c44106919c482269cb2c255c859eba760e784&',
        'https://cdn.discordapp.com/attachments/1151610324177399959/1263515442534682738/latest-removebg-preview.png?ex=669a83f4&is=66993274&hm=86017b86684b28a2d33b809b63e1b74eb723d892a3434ae5af69f1ee4c3ae966&',
        'https://cdn.discordapp.com/attachments/1151610324177399959/1263265509214912512/knojern-removebg-preview.png?ex=66999b2f&is=669849af&hm=a91419b9da8308902e7c69a3f5701a8e3f73df719d01c7df19093390936f0882&',
        'https://cdn.discordapp.com/attachments/1151610324177399959/1263265509491740753/kniv-removebg-preview.png?ex=66999b2f&is=669849af&hm=3413d412407a78eaeb0d94392843ba28ed4629dc7fa68dd35e062db93185a2a7&',
        'https://cdn.discordapp.com/attachments/1151610324177399959/1263265509839995020/machete-removebg-preview.png?ex=66999b2f&is=669849af&hm=41b5f591ab3221448646b50da27efb3426b9b73b09fd9cc355d43d8f08ef05d3&',
        'https://cdn.discordapp.com/attachments/1151610324177399959/1263265510204768287/springkniv-removebg-preview.png?ex=66999b2f&is=669849af&hm=82ce7536e472da223d95837fcd7ca4dfb0d6e83c600bad63bbb6cdbbe22fd326&',
        'https://cdn.discordapp.com/attachments/1151610324177399959/1263264802252390560/svenskngle-removebg-preview.png?ex=66999a87&is=66984907&hm=41016328e2177166395cf58a17bf62f6971aaa69f9fa1915414a4b3325c1f60a&',
        'https://cdn.discordapp.com/attachments/1151610324177399959/1263265560335089725/koben-removebg-preview.png?ex=66999b3b&is=669849bb&hm=11ca989266b093b8b186dcce20f90c1cffd97cafd163b29c1c956d0cf32042b4&',
        'https://cdn.discordapp.com/attachments/1151610324177399959/1263265560553066637/lommelygte-removebg-preview.png?ex=66999b3b&is=669849bb&hm=8af6e90d45c5493bbee1c1cce3f44444a73ce70a63d75ac2c87b73d64aae4703&',
        'https://cdn.discordapp.com/attachments/1151610324177399959/1263265560775495732/golfklle-removebg-preview.png?ex=66999b3c&is=669849bc&hm=7976ffeb4751998dac0992d370fe2fb13aea0030a00ed23daa154ee94d773a57&',
        'https://cdn.discordapp.com/attachments/1151610324177399959/1263265560976818196/hammer-removebg-preview.png?ex=66999b3c&is=669849bc&hm=12fd50a43e54acd5c00c92ee53d37ca0c939dfa490d1d5e9fc5656ececb26997&',
    ]

    const weaponprices = [
        '1200',
        '1100',
        '2500',
        '1000',
        '500',
        '2000',
        '7000',
        '5000',
        '800',
        '1500',
        '2000',
    ]

    const weaponnames = [
        'Baseball-Bat',
        'Kampøkse',
        'Knojern',
        'Zombie-Kniv',
        'Machete',
        'foldekniv',
        'Svensknøgle',
        'Koben',
        'Lommelygte',
        'Golfkølle',
        'Hammer',
    ]

    const weapondmg = [
        'Skade 40HP',
        'Skade 80HP',
        'Skade 70HP',
        'Skade 50HP',
        'Skade 100HP',
        'Skade 10HP',
        'Skade 70HP',
        'Skade 20HP',
        'Skade 50HP',
        'Skade 40HP',
        'Skade 10HP',
    ]


    let currentIndex = 0;
    let currentIndex2 = 0;
    let currentIndex3 = 0;
    let currentIndex4 = 0;

    function updateContent() {
        weapon.src = imageSources[currentIndex];
        pricetext.textContent = weaponprices[currentIndex2] + ' DKK,-';
        nametext.textContent = weaponnames[currentIndex3];
        dmg.textContent = weapondmg[currentIndex4];
    }

    fbutton.addEventListener('click', function() {
        weapon.style.left = '80%';
        setTimeout(function() {
            currentIndex = (currentIndex + 1) % imageSources.length;
            currentIndex2 = (currentIndex2 + 1) % weaponprices.length;
            currentIndex3 = (currentIndex3 + 1) % weaponnames.length;
            currentIndex4 = (currentIndex4 + 1) % weapondmg.length;
            weapon.style.left = '50%';
            updateContent();
        }, 400);
    });
    
    

    bbutton.addEventListener('click', function() {
        weapon.style.left = '20%';
        setTimeout(function() {
        currentIndex = (currentIndex - 1 + imageSources.length) % imageSources.length;
        currentIndex2 = (currentIndex2 - 1 + weaponprices.length) % weaponprices.length;
        currentIndex3 = (currentIndex3 - 1 + weaponnames.length) % weaponnames.length;
        currentIndex4 = (currentIndex4 - 1 + weapondmg.length) % weapondmg.length;
        weapon.style.left = '50%';
        updateContent();
    }, 400);
    });

    closebutton.addEventListener('click', function() {
        setTimeout(function() {
            mainbox.classList.remove('show');
            $.post(`https://${GetParentResourceName()}/closeweaponstore`, JSON.stringify({}), function() {});
        updateContent();
    }, 100);
    });

    buybutton.addEventListener('click', function() {
        var weaponname = weaponnames[currentIndex3];
        var weaponprice = weaponprices[currentIndex2];
        setTimeout(function() {
            $.post(`https://${GetParentResourceName()}/buyweapon`, JSON.stringify({ weaponname: weaponname, price: weaponprice }), function() {});
        updateContent();
    }, 200);
    });

});
