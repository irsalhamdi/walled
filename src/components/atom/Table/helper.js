
export const loadingSkeleton = (loading, data) => {
  // if (loading) return (
  //   <Skeleton width={100} animation="wave" />
  // );
  return data;
};

export function convertUsds2(value) {
  if (value === '' || value === null || value === undefined) {
    return null;
  }
  if (value === 'N/A') {
    return value;
  }
  if (value === 0 || isNaN(value)) {
    return '0';
  }

  let n = Math.abs(value).toFixed(2).split('.');
  n[0] = n[0]
    .split('')
    .reverse()
    .map((c, i, a) => (i > 0 && i < a.length && i % 3 == 0 ? `${c}.` : c))
    .reverse()
    .join('');
  return `${(Math.sign(value) < 0 ? '-' : '') + n.join(',')}`;
}

export const dataTable = {
  page: 1,
  per_page: 10,
  total_pages: 1,
  total_items: 2,
  transactions: [
    {
      id: "123456",
      date_time: "2025-03-15T10:00:00Z",
      type: "transfer",
      from: "Irsal Hamdi",
      to: "John Doe",
      description: "Payment for services",
      amount: 1500000,
    },
    {
      id: "123457",
      date_time: "2025-03-14T15:30:00Z",
      type: "deposit",
      from: "Bank BSI",
      to: "Irsal Hamdi",
      description: "Salary deposit",
      amount: 5000000,
    },
    {
      id: "123458",
      date_time: "2025-03-14T15:30:00Z",
      type: "deposit",
      from: "Bank BSI",
      to: "Irsal Hamdi",
      description: "Salary deposit",
      amount: 5000000,
    },
    {
      id: "123459",
      date_time: "2025-03-14T15:30:00Z",
      type: "deposit",
      from: "Bank BSI",
      to: "Irsal Hamdi",
      description: "Salary deposit",
      amount: 5000000,
    },
    {
      id: "123410",
      date_time: "2025-03-14T15:30:00Z",
      type: "deposit",
      from: "Bank BSI",
      to: "Irsal Hamdi",
      description: "Salary deposit",
      amount: 5000000,
    },
    {
      id: "123411",
      date_time: "2025-03-14T15:30:00Z",
      type: "deposit",
      from: "Bank BSI",
      to: "Irsal Hamdi",
      description: "Salary deposit",
      amount: 5000000,
    },
    {
      id: "123412",
      date_time: "2025-03-14T15:30:00Z",
      type: "deposit",
      from: "Bank BSI",
      to: "Irsal Hamdi",
      description: "Salary deposit",
      amount: 5000000,
    },
  ],
};
