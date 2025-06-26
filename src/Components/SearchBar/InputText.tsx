import { useState} from "react"

type InputTextProps = {
    onsubmit: (value:string) => void
}

export const InputText = ({onsubmit}:InputTextProps) => {

  const [text, setText] = useState('')    

 function handleSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault()
    console.log('buscaste: ', text);
    onsubmit(text)
    setText('')
 }

  return (
    <div>
        <form onSubmit={handleSubmit} action="submit">
            <input value={text} type="text" onChange={(e)=>setText(e.target.value)}/>
        </form>
    </div>
  )
}
