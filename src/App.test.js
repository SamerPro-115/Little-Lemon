import { render, screen, fireEvent, act  } from '@testing-library/react';
import BookingForm from './components/BookingForm';

const mockSubmitForm = jest.fn(() => true);



describe('Date field validation', () => {
  test('shows an error when the date is left empty and blurred', async () => {
    render(<BookingForm />);

    const dateInput = screen.getByLabelText(/Choose date/);
   

    // Simulate picking a date (Must use YYYY-MM-DD format) with act
    // Use act to ensure all updates are processed before assertions
    await act(async () => {
      fireEvent.focus(dateInput);
      fireEvent.blur(dateInput);
    });


    expect(await screen.findByText(/please choose a date/i)).toBeInTheDocument();
  });

  test('shows an error for a past date', async () => {
    render(<BookingForm />);

    const dateInput = screen.getByLabelText(/Choose date/);
  

      await act(async () => {
    fireEvent.change(dateInput, { target: { value: '2020-01-01' } });
    fireEvent.blur(dateInput);
});

    expect(await screen.findByText(/date can't be in the past/i)).toBeInTheDocument();
  });

  test('accepts a valid future date with no error', async () => {
    render(<BookingForm />);

    const dateInput = screen.getByLabelText(/Choose date/);

          await act(async () => {
      fireEvent.change(dateInput, { target: { value: '2026-12-25' } });
    fireEvent.blur(dateInput);
});


    expect(dateInput.value).toBe('2026-12-25');
    expect(screen.queryByText(/date can't be in the past/i)).not.toBeInTheDocument();
  });

  test('clears the selected time when the date changes', async () => {
  const handleDateChange = jest.fn();
  render(
    <BookingForm
      availableTimes={['17:00', '18:00', '19:00']}
      onDateChange={handleDateChange}
    />
  );

  const dateInput = screen.getByLabelText(/Choose date/);
  const timeSelect = screen.getByLabelText(/Choose time/);

  await act(async () => {
    fireEvent.change(dateInput, { target: { value: '2026-12-25' } });
  });
  await act(async () => {
    fireEvent.change(timeSelect, { target: { value: '18:00' } });
  });

  expect(timeSelect.value).toBe('18:00');

  // Change the date again the previously chosen time should reset
  await act(async () => {
    fireEvent.change(dateInput, { target: { value: '2026-12-26' } });
  });

  expect(timeSelect.value).toBe('');
  expect(handleDateChange).toHaveBeenCalledWith('2026-12-26');
});
});

describe('Time field', () => {
  test('lets the user select a time', async () => {
    render(
      <BookingForm
        availableTimes={['17:00', '18:00', '19:00']}
        submitForm={mockSubmitForm}
      />
    );
 
    const timeSelect = screen.getByLabelText(/Choose time/);
 
    await act(async () => {
      fireEvent.change(timeSelect, { target: { value: '18:00' } });
    });
 
    expect(timeSelect.value).toBe('18:00');
  });
});
 
describe('Guests field', () => {
  test('lets the user enter a number of guests', async () => {
    render(<BookingForm availableTimes={[]} submitForm={mockSubmitForm} />);
 
    const guestsInput = screen.getByLabelText(/Number of guests/);
 
    await act(async () => {
      fireEvent.change(guestsInput, { target: { value: '4' } });
    });
 
    expect(guestsInput.value).toBe('4');
  });
});
 
describe('Occasion field', () => {
  test('lets the user select an occasion', async () => {
    render(<BookingForm availableTimes={[]} submitForm={mockSubmitForm} />);
 
    const occasionSelect = screen.getByLabelText(/Occasion/);
 
    await act(async () => {
      fireEvent.change(occasionSelect, { target: { value: 'Birthday' } });
    });
 
    expect(occasionSelect.value).toBe('Birthday');
  });
});