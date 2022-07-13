import { useRouter } from 'next/router';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';

function newMeetupPage() {
  const router = useRouter();
  async function addMeetupHandler(enteredMeetupData) {
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(enteredMeetupData),
      headers: {
        'Content-type': 'application/json',
      },
    });

    const data = await response.json();
    router.replace('/');
  }
  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}

export default newMeetupPage;
