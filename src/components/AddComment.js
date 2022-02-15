const AddComment = () => {

  return (
    <div>
      <form onSubmit={console.log('submit')}>
        <div>
          <input
            placeholder="Enter your task"
          />
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
};

export default AddComment;
