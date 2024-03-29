const BookingRow = ({ booking, handleDelete, handleBookingConfirm }) => {
  const { _id, img, email, date, price, service, status } = booking;
  return (
    <div>
      <tr>
        <th>
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-sm btn-circle btn-outline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </th>
        <td>
          <div className="avatar">
            <div className="rounded w-14 h-14">
              <img src={img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </td>
        <td>{email}</td>
        <td>{service}</td>
        <td>{date}</td>
        <td>${price}</td>
        <th>
          {
            status === 'confirm' ? <span className="text-primary font-bold">Confirmed</span> :
            <button
              onClick={() => handleBookingConfirm(_id)}
              className="btn btn-ghost btn-xs"
            >
              Please Confirm
            </button>
          }
        </th>
      </tr>
    </div>
  );
};

export default BookingRow;
