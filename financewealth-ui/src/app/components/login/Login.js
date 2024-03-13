const Login = () => {
    return(
        <form method="POST" className="w-50 border border-2 border-gray p-8 flex flex-col items-center">
            <div class="gap-x-6 gap-y-8">
                <div class="sm:col-span-4">
                <label for="username" class="block text-sm font-medium leading-6 text-gray-900">E-mail</label>
                    <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input type="text" name="username" id="username" autocomplete="username" class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="E-mail de usuário" />
                </div>
            </div>
            <div class="gap-x-6 gap-y-8">
                <div class="sm:col-span-4">
                <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Senha</label>
                    <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input type="password" name="password" id="password" autocomplete="password" class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="Senha de usuário" />
                </div>
            </div>
            </div>
        </div>
        <input type="submit" className="inline-flex items-center rounded-md bg-green-500 mt-2 pl-6 text-sm font-semibold text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 cursor-pointer w-20 h-8 text-center" value="Login" />
        </form>
    );
};

export default Login