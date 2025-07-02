import { CommonTable, type TableColumn } from '../../components/Table/CommonTable';

const coachColumns: TableColumn[] = [
  { field: 'name', header: 'Name' },
  { field: 'coachId', header: 'Coach ID' },
  { field: 'contact', header: 'Contact Number' },
];

const coachData = [
  { name: 'John Doe', coachId: 'C001', contact: '1234567890' },
  { name: 'John Doe', coachId: 'C001', contact: '1234567890' },
  { name: 'John Doe', coachId: 'C001', contact: '1234567890' },
  { name: 'John Doe', coachId: 'C001', contact: '1234567890' },
  { name: 'John Doe', coachId: 'C001', contact: '1234567890' },
  { name: 'John Doe', coachId: 'C001', contact: '1234567890' },
  { name: 'John Doe', coachId: 'C001', contact: '1234567890' },
  { name: 'John Doe', coachId: 'C001', contact: '1234567890' },
  { name: 'John Doe', coachId: 'C001', contact: '1234567890' },
  { name: 'John Doe', coachId: 'C001', contact: '1234567890' },
  { name: 'John Doe', coachId: 'C001', contact: '1234567890' },
  { name: 'John Doe', coachId: 'C001', contact: '1234567890' },
  { name: 'John Doe', coachId: 'C001', contact: '1234567890' },
  { name: 'John Doe', coachId: 'C001', contact: '1234567890' },
  { name: 'John Doe', coachId: 'C001', contact: '1234567890' },

  // ...more data
];

export default function CoachesTable() {
  return (
    <div className="p-8">
      <CommonTable value={coachData} columns={coachColumns} />
    </div>
  );
}