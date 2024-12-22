import { connect } from 'react-redux';
import { getEventsThunk } from '../../store/slices/eventsSlice';
import { useEffect } from 'react';

function EventsPage ({ getEvents, events }) {
  useEffect(() => {
    getEvents();
  }, []);
  return (
    <div>
      {events.map(e => (
        <li style={{ marginTop: '15px' }}>{JSON.stringify(e)}</li>
      ))}
    </div>
  );
}

const mapStateToProps = ({ eventsData }) => eventsData;

const mapDispatchToProps = dispatch => ({
  getEvents: () => dispatch(getEventsThunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(EventsPage);
