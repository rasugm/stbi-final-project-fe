const TableCardScrollHeader = () => {
    return (
        <thead className=" text-gray-500">
            <tr>
                <th className="px-2 py-3 text-left">Brand</th>
                <th className="px-2 py-3 text-left">Category</th>
                <th className="px-2 py-3 text-left">Price</th>
                <th className="px-2 py-3 text-left">Status</th>
                <th className="px-2 py-3 text-left w-[10%]">Action</th>
            </tr>
        </thead>
    );
};

export default TableCardScrollHeader;
