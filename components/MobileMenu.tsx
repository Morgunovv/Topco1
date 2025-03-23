import * as React from "react";
import { PlasmicMobileMenu } from "../plasmic/topco/PlasmicMobileMenu";

interface MobileMenuProps {
    className?: string;
    // добавьте другие пропсы если нужны
}

function MobileMenu_(
    props: MobileMenuProps,
    ref: React.ForwardedRef<HTMLButtonElement>
) {
    return (
        <PlasmicMobileMenu
            menuButton={{
                ref: ref as React.Ref<HTMLButtonElement>,
                as: "button" // явно указываем, что это кнопка
            }}
            {...props}
        />
    );
}

export const MobileMenu = React.forwardRef<HTMLButtonElement, MobileMenuProps>(
    MobileMenu_
);

MobileMenu.displayName = 'MobileMenu';

export default MobileMenu; 