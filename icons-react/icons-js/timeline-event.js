import * as React from "react";

function IconTimelineEvent({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-timeline-event" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={12} cy={18} r={2} /><path d="M10 18h-6" /><path d="M14 18h6" /><path d="M12 13l-2 -2h-3a1 1 0 0 1 -1 -1v-5a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v5a1 1 0 0 1 -1 1h-3l-2 2z" /></svg>;
}

export default IconTimelineEvent;