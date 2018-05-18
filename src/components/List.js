import React, { Component } from 'react';
import Group from './Group';

class List extends Component{
        render(){
            const index = [];
            var charA = 'a', charZ = 'z', i = charA.charCodeAt(0),
            j = charZ.charCodeAt(0);
            for(;i<=j;++i){
                index.push(String.fromCharCode(i));
            }
            index.push('#');

        var list = index.map((title,x)=><Group key={x} title={title}/>);
        
        return(
            <div>
                {list}
            </div>
        )
        }
}




export default List;