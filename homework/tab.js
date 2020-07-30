document.getElementById('1').addEventListener('click', function(){
    document.getElementById('1').className = 'tab-button orange';
    document.getElementById('0').className = 'tab-button';
    document.getElementById('2').className = 'tab-button';
    
    document.getElementById('content1').className = 'tab-content show';
    document.getElementById('content0').className = 'tab-content';
    document.getElementById('content2').className = 'tab-content';
});

document.getElementById('0').addEventListener('click', function(){
    document.getElementById('0').className = 'tab-button orange';
    document.getElementById('1').className = 'tab-button';
    document.getElementById('2').className = 'tab-button';
    
    document.getElementById('content0').className = 'tab-content show';
    document.getElementById('content1').className = 'tab-content';
    document.getElementById('content2').className = 'tab-content';
});

document.getElementById('2').addEventListener('click', function(){
    document.getElementById('2').className = 'tab-button orange';
    document.getElementById('1').className = 'tab-button';
    document.getElementById('0').className = 'tab-button';
    
    document.getElementById('content2').className = 'tab-content show';
    document.getElementById('content1').className = 'tab-content';
    document.getElementById('content0').className = 'tab-content';
});