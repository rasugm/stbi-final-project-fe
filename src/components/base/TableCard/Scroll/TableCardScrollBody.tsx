import Icon from '../../Icon';

const TableCardScrollBody = () => {
    return (
        <tbody>
            <tr className="bg-white shadow-sm">
                <td className="p-3">
                    <div className="flex align-items-center">
                        <img className="rounded-full h-12 w-12  object-cover" src="https://images.unsplash.com/photo-1613588718956-c2e80305bf61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80" alt="unsplash image" />
                        <div className="ml-3">
                            <div className="">Appple</div>
                            <div className="text-gray-500">mail@rgmail.com</div>
                        </div>
                    </div>
                </td>
                <td className="p-3">
					Technology
                </td>
                <td className="p-3 font-bold">
					200.00$
                </td>
                <td className="p-3">
                    <span className="bg-green-400 text-gray-50 rounded-md px-2">available</span>
                </td>
                <td className="p-3">
                    <a href="#" className="text-gray-400 hover:text-gray-100">
                        <Icon name="eye" />
                    </a>
                </td>
            </tr>
        </tbody>
    );
};

export default TableCardScrollBody;
