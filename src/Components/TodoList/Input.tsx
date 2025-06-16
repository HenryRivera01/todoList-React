
export const Input = () => {

    function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        console.log('enviaste');
    }

  return (
    <div>
        <form onSubmit={handleSubmit} action="submit">
            <input type="text" />
        </form>
    </div>
  )
}
