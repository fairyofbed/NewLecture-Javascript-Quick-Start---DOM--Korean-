//Ex 7-3 : 엘리멘트 노드의 속성 & CSS 속성 변경
window.addEventListener('load',function(){
    var notices = [
        {id:5, title:'퐈이야~~~', regDate:'2019-01-26', writerId:'newlec', hit:0},
        {id:6, title:'나 좀 복제해줘~', regDate:'2019-01-26', writerId:'newlec', hit:17}
    ];
    // console.log(notices.length);
    var section = document.querySelector('#section7-3');

    var noticeList = section.querySelector('.notice-list');
    var tbodyNode = noticeList.querySelector('tbody');
    var cloneButton = section.querySelector('.clone-button');
    var templateButton = section.querySelector('.template-button');

        cloneButton.onclick = function(){
       
            var trNode = noticeList.querySelector('tbody tr');
            var cloneNodeTr = trNode.cloneNode(true);
            var tds = cloneNodeTr.querySelectorAll('td');
            tds[0].textContent = notices[0].id;
            tds[1].innerHTML = '<a href="notices[0].id">'+notices[0].title+'</a>';
            tds[2].textContent = notices[0].regDate;
            tds[3].textContent = notices[0].writerId;
            tds[4].textContent = notices[0].hit;
    
    
            tbodyNode.append(cloneTrNode);
        };
        templateButton.onclick = function(){
            for (var i = 0; i < notices.length; i++){
                var template = section.querySelector('template');
                var cloneNodeTemplate = document.importNode(template.content, true);
        
                var tds = cloneNodeTemplate.querySelectorAll('td');
                tds[0].textContent = notices[i].id;
                tds[1].innerHTML = '<a href="notices[i].id">'+notices[i].title+'</a>';
                tds[2].textContent = notices[i].regDate;
                tds[3].textContent = notices[i].writerId;
                tds[4].textContent = notices[i].hit;
        
                tbodyNode.append(cloneNodeTemplate);
            } 
        };
});

//Ex 7-2 : 엘리멘트 노드의 속성 & CSS 속성 변경
window.addEventListener('load',function(){
    var notices = [
        {id:5, title:'퐈이야~~~', regDate:'2019-01-26', writerId:'newlec', hit:0},
        {id:6, title:'나 좀 복제해줘~', regDate:'2019-01-26', writerId:'newlec', hit:17}
    ];
    // console.log(notices.length);
    var section = document.querySelector('#section7-2');

    var noticeList = section.querySelector('.notice-list');
    var tbodyNode = noticeList.querySelector('tbody');
    var cloneButton = section.querySelector('.clone-button');
    var templateButton = section.querySelector('.template-button');

        cloneButton.onclick = function(){
       
            var trNode = noticeList.querySelector('tbody tr');
            var cloneNodeTr = trNode.cloneNode(true);
            var tds = cloneNodeTr.querySelectorAll('td');
            tds[0].textContent = notices[0].id;
            tds[1].innerHTML = '<a href="notices[0].id">'+notices[0].title+'</a>';
            tds[2].textContent = notices[0].regDate;
            tds[3].textContent = notices[0].writerId;
            tds[4].textContent = notices[0].hit;
    
    
            tbodyNode.append(cloneTrNode);
        };
        templateButton.onclick = function(){
            var template = section.querySelector('template');
            // var cloneNodeTemplate = trNode.cloneNode(true);
            // 이 부분만 조금 다릅니다.
            // document 기능을 써줘야 합니다.
    
            var cloneNodeTemplate = document.importNode(template.content, true);
    
            var tds = cloneNodeTemplate.querySelectorAll('td');
            tds[0].textContent = notices[0].id;
            tds[1].innerHTML = '<a href="notices[0].id">'+notices[0].title+'</a>';
            tds[2].textContent = notices[0].regDate;
            tds[3].textContent = notices[0].writerId;
            tds[4].textContent = notices[0].hit;
    
            tbodyNode.append(cloneNodeTemplate);
        };
});

//Ex 7-1 : 엘리멘트 노드의 속성 & CSS 속성 변경
window.addEventListener('load',function(){
    var notices = [
        {id:5, title:'퐈이야~~~', regDate:'2019-01-26', writerId:'newlec', hit:0},
        {id:6, title:'나 좀 복제해줘~', regDate:'2019-01-26', writerId:'newlec', hit:17}
    ];
    var section = document.querySelector('#section7-1');

    var noticeList = section.querySelector('.notice-list');
    var tbodyNode = noticeList.querySelector('tbody');
    var cloneButton = section.querySelector('.clone-button');
    var templateButton = section.querySelector('.template-button');

    cloneButton.onclick = function(){
       
        var trNode = noticeList.querySelector('tbody tr');
        var cloneTrNode = trNode.cloneNode(true);
        var tds = cloneTrNode.querySelectorAll('td');
        tds[0].textContent = notices[0].id;
        // tds[1].textContent = notices[0].title;
        // 타이틀은 <a>태그로 감쌀려고 했었습니다. 

        // tds[1].innerHTML = '<a href="">'+notices[0].title+'</a>';
        tds[1].innerHTML = '<a href="notices[0].id">'+notices[0].title+'</a>';
        tds[2].textContent = notices[0].regDate;
        tds[3].textContent = notices[0].writerId;
        tds[4].textContent = notices[0].hit;


        tbodyNode.append(cloneTrNode);
    };
    
    templateButton = function(){

    };
});

//Ex 7-0 : 엘리멘트 노드의 속성 & CSS 속성 변경
window.addEventListener('load',function(){
    var notices = [
        {id:5, title:'퐈이야~~~', regDate:'2019-01-26', writerId:'newlec', hit:0},
        {id:6, title:'나 좀 복제해줘~', regDate:'2019-01-26', writerId:'newlec', hit:17}
    ];
    var section = document.querySelector('#section7-0');

    var noticeList = section.querySelector('.notice-list');
    var tbodyNode = noticeList.querySelector('tbody');
    var cloneButton = section.querySelector('.clone-button');
    var templateButton = section.querySelector('.template-button');

    cloneButton.onclick = function(){
        // var cloneNode = noticeList.querySelector('tbody tr:first-child');
        // 굳이 :first-child라고 표기해야 할 필요가 없습니다.
        // querySelectorAll를 사용했다면 그래야 하겠습니다만. 
        // querySelector의 특성을 생각해보시면.

        var trNode = noticeList.querySelector('tbody tr');
        var cloneTrNode = trNode.cloneNode(true);
        tbodyNode.append(cloneTrNode);
    };
    
    templateButton = function(){

    };
});
