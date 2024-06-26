import React from 'react';
import './styles.css';

interface Props {
    children?: React.ReactNode;
    indicatorCap?: React.SVGAttributes<SVGCircleElement>['strokeLinecap'];
    indicatorColor?: string;
    indicatorWidth?: number;
    label?: string;
    labelColor?: string;
    progress: number;
    size?: number;
    spinnerMode?: boolean;
    spinnerSpeed?: number;
    trackColor?: string;
    trackWidth?: number;
}

const CircularProgressBar = (props: Props) => {
    let {
        size = 150,
        progress = 0,
        trackWidth = 10,
        trackColor = `#ddd`,
        indicatorWidth = 10,
        indicatorColor = `#07c`,
        indicatorCap = `round`,
        label = `Loading...`,
        labelColor = `#333`,
        spinnerMode = false,
        spinnerSpeed = 1,
        children,
    } = props;

    const center = size / 2,
        radius = center - (trackWidth > indicatorWidth ? trackWidth : indicatorWidth),
        dashArray = 2 * Math.PI * radius,
        dashOffset = dashArray * ((100 - progress) / 100);

    let hideLabel = size < 100 || !label.length || spinnerMode ? true : false;

    return (
        <>
            <div className="svg-pi-wrapper" style={{ width: size, height: size }}>
                <svg className="svg-pi" style={{ width: size, height: size }}>
                    <circle
                        className="svg-pi-track"
                        cx={center}
                        cy={center}
                        fill="transparent"
                        r={radius}
                        stroke={trackColor}
                        strokeWidth={trackWidth}
                    />
                    <circle
                        className={`svg-pi-indicator ${spinnerMode ? 'svg-pi-indicator--spinner' : ''}`}
                        style={{ animationDuration: spinnerSpeed * 1000 } as any}
                        cx={center}
                        cy={center}
                        fill="transparent"
                        r={radius}
                        stroke={indicatorColor}
                        strokeWidth={indicatorWidth}
                        strokeDasharray={dashArray}
                        strokeDashoffset={dashOffset}
                        strokeLinecap={indicatorCap}
                    />
                </svg>
                {children ? (
                    <div className="svg-pi-label">{children}</div>
                ) : (
                    !hideLabel && (
                        <div className="svg-pi-label" style={{ color: labelColor }}>
                            <span className="svg-pi-label__loading">{label}</span>

                            {!spinnerMode && (
                                <span className="svg-pi-label__progress">{`${progress > 100 ? 100 : progress}%`}</span>
                            )}
                        </div>
                    )
                )}
            </div>
        </>
    );
};

CircularProgressBar.defaultProps = {
    size: 150,
    trackWidth: 10,
    trackColor: `#ddd`,
    indicatorWidth: 10,
    indicatorColor: `#07c`,
    indicatorCap: `round`,
    label: `Loading...`,
    labelColor: `#333`,
    spinnerMode: false,
    spinnerSpeed: 1,
    children: undefined,
};
export default CircularProgressBar;
