<script>
	import { page } from "$app/stores";

 const {host, protocol, pathname} = $page.url

 const projectId = pathname.split('/')[2]

 

  </script>

<div class="bg-white border border-gray-200 rounded-lg shadow p-6 mx-auto my-10 w-full">
    <h2 class="text-xl font-semibold mb-4">Integrate Your Bot</h2>
    <p class="text-gray-700 mb-4">To add the bot to your website, use the following iframe code:</p>
    <pre class="bg-gray-100 border border-gray-300 rounded-lg p-4 text-sm text-gray-800">
      <code>&lt;iframe src="{protocol}//{host}/embed/{projectId}" width="300px" height="100%" frameborder="0"&gt;&lt;/iframe&gt;</code>
    </pre>
    <p class="text-gray-600 mt-4">Copy and paste this code into the HTML of your website where you want the bot to appear.</p>
  </div>
  