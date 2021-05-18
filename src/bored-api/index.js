const baseUrl = `http://www.boredapi.com/api`;

export const oneRandomActivity = async () => {
    const responseObj = await fetch(`${baseUrl}/activity`);
    const { activity } = await responseObj.json();
    return activity;
};

export const oneRandomActivityOfType = async (type) => {
    const responseObj = await fetch(`${baseUrl}/activity?type=${type}`);
    const { activity } = await responseObj.json();
    return activity;
};
export const TYPES_OF_ACTIVITIES = [
    "education",
    "recreational",
    "social",
    "diy",
    "charity",
    "cooking",
    "relaxation",
    "music",
    "busywork"
];