if(NOT TARGET fbjni::fbjni)
add_library(fbjni::fbjni SHARED IMPORTED)
set_target_properties(fbjni::fbjni PROPERTIES
    IMPORTED_LOCATION "/Users/rahulbhanushali/.gradle/caches/8.12/transforms/5702e0a83b8fd3d19ff8bf2a468fa6c7/transformed/fbjni-0.7.0/prefab/modules/fbjni/libs/android.armeabi-v7a/libfbjni.so"
    INTERFACE_INCLUDE_DIRECTORIES "/Users/rahulbhanushali/.gradle/caches/8.12/transforms/5702e0a83b8fd3d19ff8bf2a468fa6c7/transformed/fbjni-0.7.0/prefab/modules/fbjni/include"
    INTERFACE_LINK_LIBRARIES ""
)
endif()

