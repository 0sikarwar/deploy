import React, { Fragment } from "react";
import classNames from "classnames";


class ToolTip extends React.Component {

	render() {
		const { display, children } = this.props;
		return (
			<div className='p-relative ml-10 tootTip-container'>
				<div className={classNames({
					"triangle-top": display === "top",
					"triangle-bottom": display === "bottom",
				})}></div>
				<div className={classNames({
					"triangle-inner-top": display === "top",
					"triangle-inner-bottom": display === "bottom",
				})}></div>
				<div className='toolTip-body br-10'>
					{children}
				</div>
			</div>

		);

	}
}

ToolTip.defaultProps = {
	display: "top"
};

export default ToolTip;