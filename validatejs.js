
        let replace = document.getElementById('replace');
				let text = document.getElementById('text');
        let replaceText = ['You are awesome!', 'You are incredibly smart!' , 'You rock!', 'You are amazing!', ' You are talented!', 'You have so much worth!','you are incredibly skilled!', 'You are capable of amazing things!', 'You are enough!', 'You are brave!', 'You are determined!', 'You have great ideas!'];     
            replace.addEventListener('click',function(){             			        		text.innerHTML = (replaceText[Math.floor(Math.random()*replaceText.length)]);
            });
