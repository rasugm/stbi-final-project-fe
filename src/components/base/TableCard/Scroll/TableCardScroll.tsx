import TableCardBody from './TableCardScrollBody';
import TableCardHeader from './TableCardScrollHeader';

const TableCardScroll = () => {
    return (
        <table className="table-card p-3 bg-tertiary-50 rounded-lg text-gray-400 border-separate space-y-6 text-sm w-full">
            <TableCardHeader />
            <TableCardBody />
        </table>
    );
};

export default TableCardScroll;
