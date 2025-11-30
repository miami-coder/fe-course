import type {ICourses} from "../../models/ICourses.ts";

interface GeneralInfoComponentProps {
    item: ICourses
}

export const SecondaryInfoComponent = ({item}: GeneralInfoComponentProps) => {
    return (
        <div className="bg-[#1e1e1e] shadow-lg rounded-2xl p-6 mb-6 border border-gray-700">
            <h2 className="text-2xl font-bold mb-3 text-blue-400">{item.title}</h2>
            <div className="flex gap-6 mb-4">
                <span className="px-3 py-1 bg-blue-900/40 text-blue-300 rounded-lg text-sm border border-blue-700/50">Month: {item.monthDuration}</span>
                <span className="px-3 py-1 bg-green-900/40 text-green-300 rounded-lg text-sm border border-green-700/50">Hours: {item.hourDuration}</span>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-300">Modules:</h3>
            <ul className="list-disc list-inside space-y-1">
                {
                    item.modules.map((module, i) => (
                        <li key={i} className="text-gray-400 hover:text-blue-300 transition">{module}</li>
                    ))
                }
            </ul>
        </div>
    );
};