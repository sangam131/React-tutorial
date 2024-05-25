function customeRender(reactElement, container){
    const domElement=document.createElement(reactElement.type)
}

const reactElement={
    type:'p',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children: 'Click me to visit Google'
}

const mainContainer=document.querySelector("#root");

customeRender(reactElement, mainContainer)