import React from "react";

export const Comment = ({comment}) => {
    return `<div>
        ${comment.UserProfileId}
        ${comment.Message}
    </div>`
}