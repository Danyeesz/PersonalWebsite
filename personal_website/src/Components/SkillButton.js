function SkillButton(props) {
  return (
    <div className='flex justify-center m-5'>
      <button
        className='lg:w-24 w-16 hover:rounded-xl hover:border-bggreen hover:border-2'
        onClick={props.onClicked}
      >
        <img className="p-2" src={props.image} />
      </button>
    </div>
  );
}

export default SkillButton;
