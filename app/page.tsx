import ChipsComponent from './library/chips/chips';

export default async function Index() {
    // const handleClick = () => {
    //     console.log('fire');

    // }
    return (
        <main className="p-5">
            <ChipsComponent
                label={'Primary'}
                classes={'primary'}
                src={'/avatar.jpg'}
                width={50}
                height={50}
            ></ChipsComponent>
        </main>
    );
}
