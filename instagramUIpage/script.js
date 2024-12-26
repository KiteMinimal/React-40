const user = [
    {
        "username": "travel_diaries",
        "userlocation": "Paris, France",
        "userprofile": "https://images.unsplash.com/photo-1524638431109-93d95c968f03?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "userPost": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=3546&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "like": true,
        "likeCount": 1200,
        "commentCount": 45,
        "shareCount": 30,
        "caption": "Enjoying the sunset at the Eiffel Tower. #ParisVibes #TravelGoals",
        "timeAgoUploaded": 5
    },
    {
        "username": "foodie_lover",
        "userlocation": "Mumbai, India",
        "userprofile": "https://images.unsplash.com/photo-1487069838269-7c05365b400b?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "userPost": "https://images.unsplash.com/photo-1554978991-33ef7f31d658?q=80&w=2620&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "like": false,
        "likeCount": 530,
        "commentCount": 20,
        "shareCount": 12,
        "caption": "The best vada pav I've ever had! 🌮❤ #MumbaiStreetFood",
        "timeAgoUploaded": 12
    },
    {
        "username": "fitness_freak",
        "userlocation": "New York, USA",
        "userprofile": "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=3538&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "userPost": "https://images.unsplash.com/photo-1485727749690-d091e8284ef3?q=80&w=3532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "like": true,
        "likeCount": 800,
        "commentCount": 60,
        "shareCount": 25,
        "caption": "Start your day with some yoga. #FitnessGoals #HealthyLiving",
        "timeAgoUploaded": 24
    },
    {
        "username": "artsy_corner",
        "userlocation": "London, UK",
        "userprofile": "https://images.unsplash.com/photo-1647205552933-12e3dfdb77b5?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "userPost": "https://plus.unsplash.com/premium_photo-1692650759141-ed71d789ef1b?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "like": true,
        "likeCount": 950,
        "commentCount": 78,
        "shareCount": 40,
        "caption": "New piece in the gallery. Let me know your thoughts! 🎨 #AbstractArt",
        "timeAgoUploaded": 7
    },
    {
        "username": "adventure_seeker",
        "userlocation": "Kyoto, Japan",
        "userprofile": "https://images.unsplash.com/photo-1681562978415-bbf1dfe59353?q=80&w=2624&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "userPost": "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "like": false,
        "likeCount": 600,
        "commentCount": 33,
        "shareCount": 18,
        "caption": "The serenity of Kyoto's bamboo forest. 🌳 #NatureLover",
        "timeAgoUploaded": 18
    }
]



function insta() {
    let clutter = "";
    user.forEach(function (elem, index) {
        clutter += `<div class="card">
            <div class="top">
                <img src="${elem.userprofile}" alt="" class="userprofile">
                <div class="userlocation">
                    <h4>${elem.username}</h4>
                    <p><i class="ri-music-2-fill"></i>${elem.userlocation}</p>
                </div>
                <button>Follow</button>
                <i id="dot" class="ri-more-fill"></i>
            </div>
            <div class="centre">
                <img id='${index}' src="${elem.userPost}" alt="" class="userPost">
            </div>
            <div class="icon">
                <div>
                     
                    <p id="L" class="likeCount"><span id='${index}'> ${elem.like ? '<i id="liked" class="ri-heart-3-fill"></i>' : '<i id="notliked" class="ri-heart-3-line"></i>'}</span> ${elem.likeCount}</p>
                </div>
                <p><i class="ri-chat-1-line"></i>${elem.commentCount}</p>
                <p><i class="ri-send-plane-fill"></i>${elem.shareCount}</p>
                <i id="T" class="ri-bookmark-line"></i>
            </div>
            <div class="about">
                <h5 class="caption">${elem.caption}</h5>
                <p class="view">View all comments</p>
                <p class="timeAgoUploaded">${elem.timeAgoUploaded} days ago</p>
            </div>
        </div>`;
    });
    document.querySelector(".main").innerHTML = clutter;

    // Attach Event Listeners After Rendering
    
}
insta()
let main = document.querySelector('.main')
main.addEventListener('click', (e)=>{
    if(user[e.target.id].like){
        user[e.target.id].likeCount--
        user[e.target.id].like = false
    }else{
        user[e.target.id].likeCount++
        user[e.target.id].like = true
    }
    insta()
})

const profiles = [
    {
      profileImage: "https://plus.unsplash.com/premium_photo-1708110921398-1fc68e98eacc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      story: "https://plus.unsplash.com/premium_photo-1708110921417-7b686f604be9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
    },
    {
      profileImage: "https://plus.unsplash.com/premium_photo-1708276231926-996b3cf6c846?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dg",
      story: "https://images.unsplash.com/photo-1498551172505-8ee7ad69f235?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fG1vZGVsfGVufDB8fDB8fHww",
    },
    {
      profileImage: "https://images.unsplash.com/photo-1638993606271-04836e75d662?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D",
      story: "https://images.unsplash.com/photo-1512310604669-443f26c35f52?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vZGVsfGVufDB8fDB8fHww",
    },
    {
      profileImage: "https://images.unsplash.com/photo-1645231886878-06478c04f9fa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D",
      story: "https://images.unsplash.com/photo-1515202913167-d9a698095ebf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fG1vZGVsfGVufDB8fDB8fHww",
    },
    {
      profileImage: "https://images.unsplash.com/photo-1620774200615-768edf9afb4a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D",
      story: "https://images.unsplash.com/photo-1563993297290-609c9406efcd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fG1vZGVsfGVufDB8fDB8fHww",
    },
    {
      profileImage: "https://images.unsplash.com/photo-1617922236117-2697cb394593?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D",
      story: "https://images.unsplash.com/photo-1550928431-ee0ec6db30d3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fG1vZGVsfGVufDB8fDB8fHww",
    },
    {
      profileImage: "https://images.unsplash.com/photo-1628336673277-cb61432c31c3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D",
      story: "https://images.unsplash.com/photo-1543096222-72de739f7917?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fG1vZGVsfGVufDB8fDB8fHww",
    },
    {
      profileImage: "https://images.unsplash.com/photo-1691692677524-7ee6b93adffd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D",
      story: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fG1vZGVsfGVufDB8fDB8fHww",
    },
  ];
  
  let clutter = ''
//   document.querySelector{'.nav'}.innerHTML
let nav = document.querySelector('.nav')
profiles.forEach(function(elem,idx) {
    clutter += `<div class="story">
                <img id="${idx}" src="${elem.profileImage}" alt="">
            </div>`
}); 
nav.innerHTML = clutter
  
nav.addEventListener('click', function(e){
    console.log(profiles[e.target.id].story)
})