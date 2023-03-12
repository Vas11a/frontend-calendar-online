export type DayArrTypes = {
    days: Array<{
        data: string;
        messages: {
            otherMess: Array<{
                name: string;
                message: string;
            }>;
            main: string;
        };
    }>;
}