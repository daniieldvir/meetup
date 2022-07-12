import NewMeetupForm from '../../components/meetups/NewMeetupForm';
function newMeetupPage() {
  function addMeetupHandler(enteredMeetupData) {
    console.log('enteredMeetupData', enteredMeetupData);
  }
  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}

export default newMeetupPage;
