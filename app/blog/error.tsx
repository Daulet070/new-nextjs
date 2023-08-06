'use client'

const Error = ({ error }: { error: Error }) => {
    return (
        <div>
            Oops!!! {error.message}
        </div>
    );
};

export default Error;