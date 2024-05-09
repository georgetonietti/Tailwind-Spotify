export function Playlist() {
    const listMusic = ['Hot Hits Brasil', 'Aniver Funk', 'My Playlist #13', 'Top Brasil']
    
    return (
        <nav className='mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3'>
            {listMusic.map((item, index) => (
                <a href="" key={index} className='text-sm text-zinc-400 hover:text-zinc-100'>{item}</a>
            ))}
        </nav>
    )
}