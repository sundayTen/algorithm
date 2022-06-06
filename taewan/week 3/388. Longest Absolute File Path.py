from collections import defaultdict

class Solution:
    def lengthLongestPath(self, input: str) -> int:
        folders = input.split('\n')
        
        def findFolderInfo(folder: str) -> dict:
            folder_info = dict()
            folder_info['depth'] = folder.count('\t')
            folder_info['length'] = len(folder) - folder_info['depth']
            
            return folder_info
        
        parents = [0] * 100
        ans = 0
        for folder in folders:
            folder_info = findFolderInfo(folder)
            max_length = parents[folder_info.get('depth') - 1] + folder_info.get('length')
            parents[folder_info.get('depth')] = max_length
            
            len_route = max_length + folder_info.get('depth')
            if ans < len_route and '.' in folder:
                ans = len_route

        return ans