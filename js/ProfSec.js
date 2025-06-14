
const supabase = window.supabase.createClient(
  'https://nomuylulsjtwjoinrxmr.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5vbXV5bHVsc2p0d2pvaW5yeG1yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU2NzgwOTgsImV4cCI6MjA2MTI1NDA5OH0.9Vgp9y1EQkbH2GooJgUmXjW4NEA-WY8keL4P5S1tiIc'
);
// .............Refresh page
window.addEventListener('load', () => {
  Profbtn.className = 'textshadowbtn';
  document.getElementById('earnsec').style.display = 'none';
  document.getElementById('profsec').style.display = 'flex';
  document.getElementById('shopsec').style.display = 'none';
});
const username = document.getElementById('Userp');
const Rank = document.getElementById('Ranks');
const level = document.getElementById('Levelp');
const Points = document.getElementById('Pointsp');
const headerPoint = document.getElementById('pointvalue');
const emailbox = document.getElementById('emailpp');
const robo = document.getElementById('robotz');
const robohiden = document.getElementById('robozhiden');


if (localStorage.getItem('robotz')) {
  robohiden.className = 'robotZnone';
}
document.getElementById('notrobot').addEventListener('click', () => {
  localStorage.setItem('robotz', 'true')
  robohiden.className = 'robotZnone';
  location.reload();
})

async function checkAndInsertUser() {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    // importt
    // alert("you cant log!");
    window.location.href = "log.html";
    return;
  }

  const { data: existingUser, error } = await supabase
    .from('usersinfo')
    .select('*')
    .eq('user_id', user.id)
    .single();


  if (existingUser) {

    console.log("User add");

    //h2 viewer
    // console.log(existingUser)
    username.innerText = `Username: ${existingUser.name}`;
    Rank.innerText = `${existingUser.Rank}`;
    level.innerText = ` ${existingUser.Level}`;
    Points.innerText = `Points: ${existingUser.Points}`;
    headerPoint.innerText = ` ${existingUser.Points}`;
    emailbox.innerText = ` ${existingUser.email}`;

    // console.log(Rank.innerText);



    // ..................shop sec.............................. 
    if (Rank.innerText == 'Silver') {

      Rank.className = 'SilverRank';
      // console.log('Silver Rank');
      async function ShopSilverRank() {
        const { data: SilverRank, error } = await supabase
          .from('SilverRank')
          .select('*')
        if (error) {
          console.log('error :', error);
        } else {
          // console.log('data :',SilverRank);
        }

        const SilverPack = SilverRank;
        // free110
        document.getElementById('Gem110').innerText = `${SilverPack.find(item => item.PackName === '100+10 Gem Free Fire').PNeed}`;
        document.getElementById('P100').innerText = `${SilverPack.find(item => item.PackName === '100+10 Gem Free Fire').PackName}`;
        document.getElementById('PNeedP110').innerText = `Price : ${SilverPack.find(item => item.PackName === '100+10 Gem Free Fire').PNeed}`;

        // free220
        document.getElementById('Gem200').innerText = `${SilverPack.find(item => item.PackName === '210+21 Gem Free Fire').PNeed}`;
        // free530
        document.getElementById('Gem500').innerText = `${SilverPack.find(item => item.PackName === '530+53 Gem Free Fire').PNeed}`;
        // free1080
        document.getElementById('Gem1080').innerText = `${SilverPack.find(item => item.PackName === '1080+108 Gem Free Fire').PNeed}`;
        // free2200
        document.getElementById('Gem2200').innerText = `${SilverPack.find(item => item.PackName === '2200+220 Gem Free Fire').PNeed}`;
        // document.getElementById('GemWhitPlayerId').innerText=`${SilverPack.find(item =>item.PackName==='2200+220 Gem Free Fire').PackName}`;


        // 60UC
        document.getElementById('UC60').innerText = `${SilverPack.find(item => item.PackName === '60 UC PUBG').PNeed}`;
        // 325UC
        document.getElementById('UC300').innerText = `${SilverPack.find(item => item.PackName === '300+25 UC PUBG').PNeed}`;
        // 660UC
        document.getElementById('UC600').innerText = `${SilverPack.find(item => item.PackName === '600+60 UC PUBG').PNeed}`;
        // FreePayGolden
        document.getElementById('GoldenRank').innerText = `${SilverPack.find(item => item.PackName === 'Golden Account FreePay').PNeed}`;
        // FreePayDaimond
        document.getElementById('DiamondRank').innerText = `${SilverPack.find(item => item.PackName === ' Diamond Account FreePay').PNeed}`;
        // 15$
        document.getElementById('Tether15Value').innerText = `${SilverPack.find(item => item.PackName === '15$ tether trc20').PNeed}`;
        // 50$
        document.getElementById('Tether50Value').innerText = `${SilverPack.find(item => item.PackName === '50$ tether trc20').PNeed}`;


      } ShopSilverRank();

    } else if (Rank.innerText == 'Golden') {
      Rank.className = 'GoldenRank';

      async function ShopGoldenRank() {
        const { data: GoldenRank, error } = await supabase
          .from('GoldenRank')
          .select('*')
        if (error) {
          console.log('error :', error);
        } else {
          // console.log('data :',GoldenRank);
        }

        const GoldenPack = GoldenRank;
        // free110
        document.getElementById('Gem110').innerText = `${GoldenPack.find(item => item.PackName === '100+10 Gem Free Fire').PNeed}`;
        document.getElementById('P100').innerText = `${GoldenPack.find(item => item.PackName === '100+10 Gem Free Fire').PackName}`;
        document.getElementById('PNeedP110').innerText = `Price : ${GoldenPack.find(item => item.PackName === '100+10 Gem Free Fire').PNeed}`;
        // 110ShopCardOk
        let Name110 = document.getElementById('Name110');
        let Email110 = document.getElementById('Email110');
        let Id110 = document.getElementById('id110');


        document.getElementById('subshopbtn').addEventListener('click', () => {
          async function Shop110() {
            // PNeed110Gem = existingUser.Points;
            GemGolden110 = GoldenPack.find(item => item.PackName === '100+10 Gem Free Fire').PNeed;
            // console.log(PNeed110Gem, GemGolden110);
            if (Name110.value.length > 1 && Email110.value.length > 4 && Id110.value.length > 5) {
              document.getElementById('subshopbtn').style.pointerEvents = 'none';
              document.getElementById('subshopbtn').style.backgroundColor = 'gray';

              async function Shop110Gem() {
                const user_Point = parseInt(existingUser.Points);
                const PNeed110Gem = parseInt(GemGolden110);

                if (user_Point >= PNeed110Gem) {
                  const UShop110Gem = user_Point - PNeed110Gem;
                  console.log(UShop110Gem);
                  const { data, error } = await supabase.from("usersinfo")
                    .update({ Points: UShop110Gem, })
                    .eq('user_id', user.id)

                  if (error) {
                    console.error('Please Charg your Account', error);

                  } else {
                    // shop 110Gem FreeFire Ok 
                    document.getElementById('FormSec110').className = 'formHiden110';
                    const { data110, error110 } = await supabase
                      .from('ShopFactor')
                      .insert([
                        {
                          PackName: GoldenPack.find(item => item.PackName === '100+10 Gem Free Fire').PackName,
                          User_Name: Name110.value,
                          Gmail: Email110.value,
                          id_Uid_address: Id110.value,
                          Player_Rank: existingUser.Rank,

                        },
                      ])
                      Swal.fire({
                        title: "Success!!",
                        icon: "success",
                        draggable: true
                      });
                    Name110.value = '';
                    Email110.value = '';
                    Id110.value = '';

                    window.location.reload();

                  }

                } else {
                  Swal.fire({
                    title: "you need more points!",
                    icon: "warning",
                    draggable: true
                  });
                }
              } Shop110Gem();


            } else {
              if (Name110.value.length > 1 && Email110.value.length > 4 && Id110.value.length > 5) {
                document.getElementById('subshopbtn').style.pointerEvents = 'all';
                document.getElementById('subshopbtn').style.backgroundColor = '#1eff00';
                document.getElementById('subshopbtn').style.boxShadow = "0rem 0rem 0.8rem #1eff00";
              }
              Swal.fire({
                title: "Please Complete all fields!",
                icon: "warning",
                draggable: true
              });
            }
            // else if(Name110.value.length <1 && Email110.value.length < 4 && Id110.value.length < 5 ){
            //   console.log('cant');
            // }



            // console.log(`data${data110}`);
            // console.log(`error${error110}`);

          } Shop110();
        });










        // free220
        document.getElementById('Gem200').innerText = `${GoldenPack.find(item => item.PackName === '210+21 Gem Free Fire').PNeed}`;
        document.getElementById('P221').innerText = `${GoldenPack.find(item => item.PackName === '210+21 Gem Free Fire').PackName}`;
        document.getElementById('PNeedP221').innerText = `Price : ${GoldenPack.find(item => item.PackName === '210+21 Gem Free Fire').PNeed}`;

        // free530
        document.getElementById('Gem500').innerText = `${GoldenPack.find(item => item.PackName === '530+53 Gem Free Fire').PNeed}`;
        // free1080
        document.getElementById('Gem1080').innerText = `${GoldenPack.find(item => item.PackName === '1080+108 Gem Free Fire').PNeed}`;
        // free2200
        document.getElementById('Gem2200').innerText = `${GoldenPack.find(item => item.PackName === '2200+220 Gem Free Fire').PNeed}`;
        // document.getElementById('GemWhitPlayerId').innerText=`${GoldenPack.find(item =>item.PackName==='2200+220 Gem Free Fire').PackName}`;

        // 60UC
        document.getElementById('UC60').innerText = `${GoldenPack.find(item => item.PackName === '60 UC PUBG').PNeed}`;
        // 325UC
        document.getElementById('UC300').innerText = `${GoldenPack.find(item => item.PackName === '300+25 UC PUBG').PNeed}`;
        // 660UC
        document.getElementById('UC600').innerText = `${GoldenPack.find(item => item.PackName === '600+60 UC PUBG').PNeed}`;
        // FreePayGolden
        document.getElementById('GoldenRank').innerText = `${GoldenPack.find(item => item.PackName === 'Golden Account FreePay').PNeed}`;
        // FreePayDaimond
        document.getElementById('DiamondRank').innerText = `${GoldenPack.find(item => item.PackName === ' Diamond Account FreePay').PNeed}`;
        // 15$
        document.getElementById('Tether15Value').innerText = `${GoldenPack.find(item => item.PackName === '15$ tether trc20').PNeed}`;
        // 50$
        document.getElementById('Tether50Value').innerText = `${GoldenPack.find(item => item.PackName === '50$ tether trc20').PNeed}`;


      } ShopGoldenRank();
    } else if (Rank.innerText == 'Diamond') {
      Rank.className = 'DiamondRank';
      async function ShopDiamondRank() {
        const { data: DiamondRank, error } = await supabase
          .from('DiamondRank')
          .select('*')
        if (error) {
          console.log('error :', error);
        } else {
          // console.log('data :',DiamondRankRank);
        }

        const DiamondPack = DiamondRank;
        // free110
        document.getElementById('Gem110').innerText = `${DiamondPack.find(item => item.PackName === '100+10 Gem Free Fire').PNeed}`;
        document.getElementById('P100').innerText = `${DiamondPack.find(item => item.PackName === '100+10 Gem Free Fire').PackName}`;
        document.getElementById('PNeedP110').innerText = `Price : ${DiamondPack.find(item => item.PackName === '100+10 Gem Free Fire').PNeed}`;
        // free220
        document.getElementById('Gem200').innerText = `${DiamondPack.find(item => item.PackName === '210+21 Gem Free Fire').PNeed}`;
        // free530
        document.getElementById('Gem500').innerText = `${DiamondPack.find(item => item.PackName === '530+53 Gem Free Fire').PNeed}`;
        // free1080
        document.getElementById('Gem1080').innerText = `${DiamondPack.find(item => item.PackName === '1080+108 Gem Free Fire').PNeed}`;
        // free2200
        document.getElementById('Gem2200').innerText = `${DiamondPack.find(item => item.PackName === '2200+220 Gem Free Fire').PNeed}`;


        // 60UC
        document.getElementById('UC60').innerText = `${DiamondPack.find(item => item.PackName === '60 UC PUBG').PNeed}`;
        // 325UC
        document.getElementById('UC300').innerText = `${DiamondPack.find(item => item.PackName === '300+25 UC PUBG').PNeed}`;
        // 660UC
        document.getElementById('UC600').innerText = `${DiamondPack.find(item => item.PackName === '600+60 UC PUBG').PNeed}`;
        // FreePayGolden
        document.getElementById('GoldenRank').innerText = `${DiamondPack.find(item => item.PackName === 'Golden Account FreePay').PNeed}`;
        // FreePayDaimond
        document.getElementById('DiamondRank').innerText = `${DiamondPack.find(item => item.PackName === ' Diamond Account FreePay').PNeed}`;
        // 15$
        document.getElementById('Tether15Value').innerText = `${DiamondPack.find(item => item.PackName === '15$ tether trc20').PNeed}`;
        // 50$
        document.getElementById('Tether50Value').innerText = `${DiamondPack.find(item => item.PackName === '50$ tether trc20').PNeed}`;


      } ShopDiamondRank();
      // console.log('Diamond Rank');


    }


    // clg info
    // console.log(existingUser); 
  } else {
    const email = user.email;
    const username = email.split('@')[0];

    const { error: insertError } = await supabase.from('usersinfo').insert([{
      user_id: user.id,
      name: username,
      email: email,
      Points: 5,
      is_active: true,
      created_at: new Date().toISOString(),
    }]);

    if (insertError) {
      console.error("Error to add user:", insertError.message);
    } else {
      console.log("User Add");
    }
  }

}
checkAndInsertUser();
// logOut
document.getElementById('LogOutbtn').addEventListener('click', () => {
  async function logOut() {
    const { error } = await supabase.auth.signOut()
  } logOut();
  setTimeout(function () {
    location.reload();

  }, 1000);
  localStorage.removeItem('robotz')
})

function sendEmail() {
  const email = 'blackalpha85a@gmail.com';
  window.location.href = `mailto:${email}`;
};



// 3 foter btn
// <input type="button" id="Profileinput" class="textshadowbtn" value="Profile">
//   <input type="button" id="Shopinput" value="Shop">
//   <input type="button" id="Earninput" value="Earn">

const Profbtn = document.getElementById('Profileinput');
const shopbtn = document.getElementById('Shopinput');
const earnbtn = document.getElementById('Earninput');



Profbtn.addEventListener('click', () => {
  Profbtn.className = 'textshadowbtn';
  shopbtn.className = '';
  earnbtn.className = '';
  document.getElementById('earnsec').style.display = 'none';
  document.getElementById('profsec').style.display = 'flex';
  document.getElementById('shopsec').style.display = 'none';
});
shopbtn.addEventListener('click', () => {
  Profbtn.className = '';
  shopbtn.className = 'textshadowbtn';
  earnbtn.className = '';
  document.getElementById('profsec').style.display = 'none';
  document.getElementById('shopsec').style.display = 'flex';
  document.getElementById('earnsec').style.display = 'none';

});
earnbtn.addEventListener('click', () => {
  Profbtn.className = '';
  shopbtn.className = '';
  earnbtn.className = 'textshadowbtn';
  document.getElementById('profsec').style.display = 'none';
  document.getElementById('earnsec').style.display = 'flex';
  document.getElementById('shopsec').style.display = 'none';
})




// ...............shop sec............... !!



//.......... 110FreeFireGem
document.getElementById('FreeDiv110').addEventListener('click', () => {
  let hidenform = document.getElementById('FormSec110');
  if (hidenform.className = "formHiden110") {
    hidenform.className = "formsec110";
  } else if (hidenform.className = "formHiden110") {
    hidenform.className = "formsec110";
  }
});
document.getElementById('Noshopbtn110').addEventListener('click', () => {
  document.getElementById('FormSec110').className = 'formHiden110';
});

//.......... 221FreeFireGem
document.getElementById('FreeDiv221').addEventListener('click', () => {
  let hidenform = document.getElementById('FormSec221');
  if (hidenform.className = "formHiden221") {
    hidenform.className = "formsec221";
  } else if (hidenform.className = "formHiden221") {
    hidenform.className = "formsec221";
  }
});
document.getElementById('Noshopbtn221').addEventListener('click', () => {
  document.getElementById('FormSec221').className = 'formHiden221';
});


// 110ShopCardOk
// let Name110 = document.getElementById('Name110');
// let Email110 = document.getElementById('Email110');
// let Id110 = document.getElementById('id110');
// let RankMode = document.getElementById('Ranks');


// document.getElementById('subshopbtn').addEventListener('click', () => {
//   async function Shop110() {


//     const { data110, error110 } = await supabase
//       .from('ShopFactor')
//       .insert([
//         {
//           PackName: Name110.value,
//           User_Name: Name110.value,
//           Gmail: Email110.value,
//           id_Uid_address: Id110.value,
//           Player_Rank: RankMode.value,

//         },
//       ])
//     console.log(`data${data110}`);
//     console.log(`error${error110}`);

//   } Shop110();
// });





