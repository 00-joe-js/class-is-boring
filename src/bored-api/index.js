const baseUrl = `http://www.boredapi.com/api`;

export const oneRandomActivity = async () => {
    const full = await oneRandomDetailedActivity();
    return full.activity;
};

export const oneRandomDetailedActivity = async () => {
    const responseObj = await fetch(`${baseUrl}/activity`);
    return await responseObj.json();
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