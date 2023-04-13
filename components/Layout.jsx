export default function Layout({children}){
    return(
        <div>
            <nav>
                Navbar
            </nav>
            <main>
                {children}
            </main>
            <footer>
                Footer
            </footer>
        </div>
    );
}