if(NOT TARGET hermes-engine::libhermes)
add_library(hermes-engine::libhermes SHARED IMPORTED)
set_target_properties(hermes-engine::libhermes PROPERTIES
    IMPORTED_LOCATION "/Users/rahulbhanushali/.gradle/caches/8.12/transforms/08cedefec4bc90e823628c16462896c0/transformed/hermes-android-0.78.0-debug/prefab/modules/libhermes/libs/android.armeabi-v7a/libhermes.so"
    INTERFACE_INCLUDE_DIRECTORIES "/Users/rahulbhanushali/.gradle/caches/8.12/transforms/08cedefec4bc90e823628c16462896c0/transformed/hermes-android-0.78.0-debug/prefab/modules/libhermes/include"
    INTERFACE_LINK_LIBRARIES ""
)
endif()

