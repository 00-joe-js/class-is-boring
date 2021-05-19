import { useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";

import { expireActivity } from "../../reducks/actions";

const randomFromArray = arr => arr[Math.floor(Math.random() * arr.length)];
const randomTrueFalse = () => Math.random() > .5;
const likelyTrue = () => Math.random() > .2;
const uncapitalize = s => s[0].toLowerCase() + s.slice(1);

const comforts = [
    "Don't worry!",
    "Are you still with us?",
    "You can do this!!",
    "If you need some help ..."
];

const ActivityReport = ({ activity }) => {

    const dispatch = useDispatch();

    useEffect(() => {
        setTimeout(() => {
            dispatch(expireActivity(activity.id));
        }, (Math.random() * 7000) + 3000);
    }, [activity.id, dispatch]);

    const fullActivityMessage = useMemo(() => {
        let message = "";

        // Possibly start with a random comfort phrase.
        if (randomTrueFalse() === true) {
            message += `${randomFromArray(comforts)} `;
        }

        message += `You could try to ${uncapitalize(activity.activity)}!`

        if (activity.isFree && likelyTrue()) {
            message += ` It doesn't cost any money!`
        }

        if (activity.participants > 1 && likelyTrue()) {
            message += ` You can do it with friends!!!`;
        }

        return message;

    }, [activity.activity, activity.isFree, activity.participants]);

    return (
        <h3>{fullActivityMessage}</h3>
    );

};

export default ActivityReport;