import React from "react";

const TimelineItem = ({ date, title, description, isLast }) => {
    return (
        <div className="relative flex items-start">
            {/* Vertical line */}
            {!isLast && (
                <div className="absolute left-5 top-6 w-0.5 h-full bg-blue-500"></div>
            )}

            {/* Timeline point */}
            <div className="z-10 flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 shadow-md">
                <div className="w-4 h-4 rounded-full bg-white"></div>
            </div>

            {/* Content */}
            <div className="ml-6 pb-8">
                <span className="inline-block px-3 py-1 text-sm font-semibold text-white bg-blue-600 rounded-full mb-2">
                    {date}
                </span>
                <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
                <div className="text-gray-300 text-base">{description}</div>
            </div>
        </div>
    );
};

const Timeline = ({ items }) => {
    return (
        <div className="py-4">
            {items.map((item, index) => (
                <TimelineItem
                    key={index}
                    date={item.date}
                    title={item.title}
                    description={item.description}
                    isLast={index === items.length - 1}
                />
            ))}
        </div>
    );
};

export default Timeline;
