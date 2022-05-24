fetch("https://www.breakingbadapi.com/api/characters")
   .then(res => res.json())
   .then(data => {

      for (let charIndex = 0; charIndex < data.length; charIndex++) {
         const characterData = data[charIndex];
         const wrapper = document.querySelector("#wrapper");

         //const para = document.createElement("p");
         //wrapper.appendChild(para);
         //CONTAINER
         const character = document.createElement("div");
         character.setAttribute("class", "character");
         wrapper.appendChild(character);
         //IMG
         const characterImg = document.createElement("img");
         characterImg.setAttribute("class", "characterImg");
         characterImg.setAttribute("src", characterData.img);
         character.appendChild(characterImg);
         //Name
         const characterName = document.createElement("h2");
         characterName.innerText = characterData.name;
         character.appendChild(characterName);
         //Nickname
         const characterNickname = document.createElement("h3");
         characterNickname.innerText = characterData.nickname;
         character.appendChild(characterNickname);
         //InfoDiv
         const info1 = document.createElement("div");
         info1.setAttribute("class", "info");
         character.appendChild(info1);
         //left p in info
         const leftP1 = document.createElement("p");
         leftP1.setAttribute("class", "leftPara");
         leftP1.innerText = "Id";
         info1.appendChild(leftP1);
         //right p in info
         const rightP1 = document.createElement("p");
         rightP1.setAttribute("class", "rightPara");
         rightP1.innerText = characterData.char_id;
         info1.appendChild(rightP1);
         //InfoDiv
         const info2 = document.createElement("div");
         info2.setAttribute("class", "info");
         character.appendChild(info2);
         //left p in info
         const leftP2 = document.createElement("p");
         leftP2.setAttribute("class", "leftPara");
         leftP2.innerText = "Occupation";
         info2.appendChild(leftP2);
         //right p in info
         const rightP2 = document.createElement("p");
         rightP2.setAttribute("class", "rightPara");
         rightP2.innerText = characterData.occupation;
         info2.appendChild(rightP2);
         //InfoDiv
         const info3 = document.createElement("div");
         info3.setAttribute("class", "info");
         character.appendChild(info3);
         //left p in info
         const leftP3 = document.createElement("p");
         leftP3.setAttribute("class", "leftPara");
         leftP3.innerText = "Breaking Bad Seasons";
         info3.appendChild(leftP3);
         //right p in info
         const rightP3 = document.createElement("p");
         rightP3.setAttribute("class", "rightPara");
         rightP3.innerText = characterData.appearance;
         info3.appendChild(rightP3);
         //InfoDiv
         const info4 = document.createElement("div");
         info4.setAttribute("class", "info");
         character.appendChild(info4);
         //left p in info
         const leftP4 = document.createElement("p");
         leftP4.setAttribute("class", "leftPara");
         leftP4.innerText = "Status";
         info4.appendChild(leftP4);
         //right p in info
         const rightP4 = document.createElement("p");
         rightP4.setAttribute("class", "rightPara");
         rightP4.innerText = characterData.status;
         info4.appendChild(rightP4);
         //event click
         const handleClickMe = (e) => {
            character.classList.toggle("characterDarker")
         }
         
         character.addEventListener("click", handleClickMe);

      };
   });