

interface Props{
    title: string;
    genre: string;
    price: number;
    available: boolean;
    icon: React.Reactnode;
}

export const GameCard = {{title, genre, price, available, icon}: Props} => {
    return(
        <div className="bg-white rounded-ig shadow-md p-4">
            <div>
                {icon && <span>{icon}</span>}
                    <div>
                        Holaaaa
                    </div>
            </div>
            <div>
                <Game></Game>
            </div>
        </div>
    )
}

