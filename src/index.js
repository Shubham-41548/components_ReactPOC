import React from "react";
import { createRoot } from 'react-dom/client';
import CommnetDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommnetDetail auther="Sam" timeAgo="Today at 6:00PM" commentText="this is first" />
            </ApprovalCard>
            <ApprovalCard>
                <CommnetDetail auther="Jam" timeAgo="Today at 5:00PM" commentText="this is second" />
            </ApprovalCard>
            <ApprovalCard>
                <CommnetDetail auther="Kam" timeAgo="Today at 8:00PM" commentText="this is third" />
            </ApprovalCard>

        </div>
    );
}

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);