import * as React from "react";
import { PlasmicMobileMenu } from "../plasmic/top_co_website/components/PlasmicMobileMenu";

interface MobileMenuProps {
    className?: string;
    // добавьте другие пропсы если нужны
}

const MobileMenu = React.forwardRef<HTMLButtonElement, MobileMenuProps>(
    (props, ref) => {
        return (
            <PlasmicMobileMenu
                menuButton={{
                    ref: ref,
                    as: "button",
                    type: "button"
                }}
                {...props}
            />
        );
    }
);

MobileMenu.displayName = 'MobileMenu';

export default MobileMenu; 
