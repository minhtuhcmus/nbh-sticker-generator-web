import React from 'react'
import { NameProps } from '../../interfaces/NameProps'
import './style.css'
// class NameDoc extends React.PureComponent {
//   render() {
//     return (
//       <div>My cool content here!</div>
//     );
//   }
// }

const NameDoc = React.forwardRef<HTMLDivElement, NameProps>((props, ref) => {
  function genDocumentToPrint() {
    let compnentsArr : Array<any> = []
    for(let i = 0; i < props.quantity; i ++) {
      compnentsArr.push(<div className='label'>{props.name.toLocaleUpperCase()}</div>)
    }
    return compnentsArr
  }
  return <div className={props.style === 2 ? 'doc' : 's-doc'} ref={ref}>{genDocumentToPrint()}</div>
})

export default NameDoc